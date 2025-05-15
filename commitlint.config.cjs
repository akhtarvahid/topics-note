module.exports = {
  // extends: ["@commitlint/config-conventional"], // Recommended: Use the conventional rules as a base
  extends: [],
  rules: {
    "subject-min-length": [2, "always", 10], // Replaces "header-min-length" (standard rule)
    "subject-case": [2, "always", "sentence-case"], // Replaces "header-case-start-capital" (built-in)
    "subject-full-stop": [2, "always", "."], // Replaces "header-end-period" (built-in)
  },
  plugins: [
    {
      rules: {
        "header-case-start-capital": ({ raw }) => {
          return [
            /^[A-Z]/.test(raw),
            "Commit message must start with a capital letter",
          ];
        },
        "header-end-period": ({ header }) => {
          return [/\.$/.test(header), "Commit message must end with a period"];
        },
      },
    },
  ],
};
