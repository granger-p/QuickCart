// src/app/api/inngest/route.ts
import { serve } from "inngest/next";
import { 
  inngest, 
  syncUserCreation, 
  syncUserUpdation, 
  syncUserDeletion 
} from '../../../config/inngest.js'
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion
  ],
});