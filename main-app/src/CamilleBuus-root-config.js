import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@CamilleBuus/sub-app",
    app: () => System.import("@CamilleBuus/sub-app"),
    activeWhen: ["/"],
})

registerApplication({
  name: '@CamilleBuus/sub-app-angular',
  app: () => System.import('@CamilleBuus/sub-app-angular'),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
