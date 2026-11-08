declare namespace App {
  interface Locals {
    /** Set by the first ImageGroup on a page, so only it loads eagerly */
    imageGroupRendered?: boolean
  }
}
