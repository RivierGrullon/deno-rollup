import type { IParseResult } from "../../deps.ts";
import type { MergedRollupOptions } from "../rollup/mod.ts";
import { getConfigPath } from "./getConfigPath.ts";
import { loadAndParseConfigFile } from "./loadAndParseConfigFile.ts";
import { loadConfigFromCommand } from "./loadConfigFromCommand.ts";

export async function getConfigs(
  program: IParseResult,
): Promise<{ options: MergedRollupOptions[] }> {
  if (program.options.config) {
    const configFile = await getConfigPath(program.options.config);

    return loadAndParseConfigFile(configFile, program.options);
  }

  return loadConfigFromCommand(program.options);
}
