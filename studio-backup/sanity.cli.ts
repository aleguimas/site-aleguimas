// studio/sanity.cli.ts
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '548uc9hr',    // seu Project ID
    dataset:   'production',
  },
  // esse valor será o seu subdomínio em *.sanity.studio
  studioHost: 'aleguimas-cms'
})
