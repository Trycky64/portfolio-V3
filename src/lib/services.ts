export interface ServiceItem {
  key: string;
  bulletKeys: string[];
}

export const services: ServiceItem[] = [
  {
    key: "website",
    bulletKeys: ["website.b1", "website.b2", "website.b3"],
  },
  {
    key: "webapp",
    bulletKeys: ["webapp.b1", "webapp.b2", "webapp.b3"],
  },
  {
    key: "nextreact",
    bulletKeys: ["nextreact.b1", "nextreact.b2", "nextreact.b3"],
  },
  {
    key: "api",
    bulletKeys: ["api.b1", "api.b2", "api.b3"],
  },
  {
    key: "deploy",
    bulletKeys: ["deploy.b1", "deploy.b2", "deploy.b3"],
  },
  {
    key: "maintenance",
    bulletKeys: ["maintenance.b1", "maintenance.b2", "maintenance.b3"],
  },
];
