
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "https://vice-api-dev.onrender.com/graphql",
    documents: "src/graphql/**/*.graphql",
    generates: {
        "src/graphql/codegen/generated.tsx": {
            plugins: ["typescript", "typescript-operations", "typescript-urql"],
        },
        "./graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};

export default config;
