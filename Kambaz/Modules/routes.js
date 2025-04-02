import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.put("/api/modules/:moduleId", (req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    modulesDao.updateModule(moduleId, moduleUpdates);
    res.send(204);
  });

  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    modulesDao.deleteModule(moduleId);
    res.send(204);
  });
}
