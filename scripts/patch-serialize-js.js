// Fixes crypto.getRandomValues not available in CJS worker threads (Node 22)
import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

const file = resolve("node_modules/serialize-javascript/index.js");
const original = "var bytes = crypto.getRandomValues(new Uint8Array(UID_LENGTH));";
const patched =
  "var cryptoImpl = (typeof crypto !== 'undefined' && crypto.getRandomValues) ? crypto : require('crypto').webcrypto;\n    var bytes = cryptoImpl.getRandomValues(new Uint8Array(UID_LENGTH));";

const src = readFileSync(file, "utf8");
if (src.includes(original)) {
  writeFileSync(file, src.replace(original, patched), "utf8");
  console.log("✓ serialize-javascript patched");
} else {
  console.log("serialize-javascript: already patched or changed, skipping");
}
