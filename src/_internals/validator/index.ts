/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { extensions, privilegeString } from '../../privileges/privilege-resolver';
import { findExtensionByBaseUrl } from '../../privileges/privilege-resolver';
import type { privileges } from '../../privileges/privilege-resolver';
import { traverseObject } from '../utils';
import MissingPrivilegesError from '../../privileges/missing-privileges-error';
import type { ShopwareMessageTypes } from '../../messages.types';

export default function validate({
  serializedData,
  extensions,
  origin,
  type,
  privilegesToCheck = [],
}: {
  serializedData: any,
  extensions: extensions,
  origin: string,
  type: keyof ShopwareMessageTypes,
  privilegesToCheck: (keyof privileges)[],
}): Error|null {
  const extension = findExtensionByBaseUrl(extensions, origin);

  if (!extension) {
    return null;
  }

  // Check privileges for entity
  const privilegeErrors: privilegeString[] = [];

  traverseObject(serializedData, (parentEntry, key, value) => {
    if (key === '__type__' && ['__EntityCollection__', '__Entity__'].includes(value as string)) {
      const entityName = parentEntry.__entityName__ as string;

      [...privilegesToCheck].sort().forEach(privilege => {
        const permissionsForPrivilege = extension.permissions[privilege];
        if (
          !permissionsForPrivilege ||
          !permissionsForPrivilege.includes(entityName)
        ) {
          privilegeErrors.push(`${privilege}:${entityName}`);
        }
      });
    }
  });

  if (privilegeErrors.length > 0) {
    return new MissingPrivilegesError(type, privilegeErrors);
  }

  return null;
}
