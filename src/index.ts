import app from "./app";
import "./database";

function main() {
  app.listen(app.get("port"), () => {
    console.log(`Server is up on port ${app.get("port")}`);
  });
}

main();
