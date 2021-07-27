import { copy } from "fs-extra";
import { join } from "path";
import { getDistDirectory } from "altair-static";

copy(getDistDirectory(), join(__dirname, "dist")).catch((err) => {
  console.error(err);
  process.exit(1);
});
