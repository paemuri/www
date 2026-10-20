# www

[![License][badge-1-img]][badge-1-link]
[![Standard.js][badge-2-img]][badge-2-link]

My personal website, running @ [paemuri.com][1]!

## Tools

### Lint/Format

Run `./format`. It always writes the changes, never checks only. Requires
`standard` and `superhtml`.

### Build

The source code is ready to be deployed. The only thing that might need manual
intervention is the QR code generation. If a wallet address changes in the HTML
files, you need to run `./gen-qr` for the SVG images of the QR codes to be
updated. Requires `qrencode` on your machine.

### Deploy

Run `./deploy`. Requires a previous `git secret reveal`.

## Source code

The main repository is on [SourceHut][source-srht]. Mirrors exist on
[Codeberg][source-codeberg] and [GitHub][source-github] for convenience, but
they might occasionally be outdated.

### License and contribution

This project's code is in the public domain. See the
[LICENSE file][source-license].

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you shall be in the public domain, without any
additional terms or conditions.

[1]: https://paemuri.com

[badge-1-img]: https://img.shields.io/badge/license-Unlicense-green?style=flat-square
[badge-1-link]: ./LICENSE
[badge-2-img]: https://img.shields.io/badge/code_style-standard-green?style=flat-square
[badge-2-link]: https://standardjs.com

[source-srht]: https://git.sr.ht/~paemuri/www
[source-codeberg]: https://codeberg.org/paemuri/www
[source-github]: https://github.com/paemuri/www
[source-license]: ./LICENSE
