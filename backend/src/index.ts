import { SquidProject } from '@squidcloud/backend';

/*****************************
 *                           *
 *    INTERNAL USE ONLY      *
 *    DO NOT MODIFY          *
 *                           *
 *****************************/

/** Export all the Squid services */
export * from './service';

class ExportedSquidProject extends SquidProject {}

export default new ExportedSquidProject();
