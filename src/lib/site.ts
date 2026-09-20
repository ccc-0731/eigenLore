export const siteBasePath = '/eigenLore'

/** Prefix a public-file path for the GitHub Pages subdirectory. */
export function publicFile(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${siteBasePath}${normalized}`
}
