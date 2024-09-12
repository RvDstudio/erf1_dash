import * as schema from './schema';

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const connectionString = process.env.NEON_DATABASE_URL!;
const client = neon(connectionString, { arrayMode: true, fullResults: true });

export const db = drizzle(client as any, { schema: schema, logger: true });
