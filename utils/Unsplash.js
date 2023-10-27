import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'r_feKsmn_mozpzcmZP-xB27CFXxSC4f2uV9X48ImFdk',
  headers: { 'X-Custom-Header': 'NomeDaSuaAplicacao' },
});

export default unsplash;
