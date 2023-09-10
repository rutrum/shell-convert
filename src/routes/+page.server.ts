import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

import fs from 'fs';
import toml from 'toml';

export const load: PageServerLoad = async ({ params }) => {   
  
  const dir = './src/lib/conversions'
  const fileList = fs.readdirSync(dir);

  const conversions = await fileList.map(f=>toml.parse(fs.readFileSync(`${dir}/${f}`, 'utf-8')))

  if (conversions) {
    return {conversions};    
  }
   
  throw error(404, 'Not found');
};