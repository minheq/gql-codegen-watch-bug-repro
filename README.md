# GraphQL Codegen Watch Reproduction

## STATUS: FIXED
Fixed in https://github.com/ardatan/graphql-toolkit/commit/7d5b56bfa1e02a0375cc248cbd8c7374e38e4264

## Description

`graphql-codegen --watch` does not work with `schema` exported from JS file

## Steps:

1. Install deps `yarn install`
2. Run codegen watcher `yarn codegen --watch`
3. See `Post` output in `generated/output.ts`
4. Edit `Post` in `typeDefs` in `schema.js` to include a new field

## Expected outcome:

`Post` output in `generated/output.ts` should include the new field

## Actual outcome:

`Post` output in `generated/output.ts` does not include the new field
