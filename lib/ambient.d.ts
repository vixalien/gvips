// meson
declare const pkg: {
  version: string;
  name: string;
};

// gettext
declare function _(id: string): string & { format: (...args: any[]) => string };
