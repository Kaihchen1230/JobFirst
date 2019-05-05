export const imports = {
  'docs/businessProfile.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-business-profile" */ 'docs/businessProfile.mdx'
    ),
  'docs/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'
    ),
}
