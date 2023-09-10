import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import fs from 'fs';
import toml from 'toml';

export const load: PageServerLoad = async () => {   
  
  const filetypes = toml.parse(fs.readFileSync('./src/lib/filetypes.toml', 'utf-8'));

  if (filetypes) {
    return {filetypes: filetypes.filetype};    
  }
   
  throw error(404, 'Not found');
};