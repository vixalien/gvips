import Vips from "gi://Vips";

Vips.init("vips-test");

Vips.Foreign.get_suffixes().map((suffix) => {
  console.log("suffix", suffix);
});

console.log();
