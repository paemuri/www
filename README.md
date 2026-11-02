# www

[![Code license][badge-1-img]][badge-1-link]
[![Content/art license][badge-2-img]][badge-2-link]
[![Standard.js][badge-3-img]][badge-3-link]

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

## License and contribution

All original code is licensed under the
[GNU Affero General Public License 3.0 or later][license-code]. All original
content and artwork are licensed under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International][license-content].

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you shall be licensed under the same license as
the material to which it is contributed, without any additional terms or
conditions.

### Third-party and exceptions

- `static/button.gif` is from the [88x31][2] project and is covered by the
  content license above.
- `static/mapple-story.gif` is from the [ms-chars][3] project. The underlying
  MapleStory assets are © Nexon and are not covered by this project's licenses.
- `static/resume.pdf` is from the [resume][4] project and remains all rights
  reserved.

[1]: https://paemuri.com
[2]: https://git.sr.ht/~paemuri/88x31
[3]: https://git.sr.ht/~paemuri/ms-chars
[4]: https://git.sr.ht/~paemuri/resume

[badge-1-img]: https://img.shields.io/badge/license-AGPL--3.0--or--later-green?style=flat-square
[badge-1-link]: ./LICENSE
[badge-2-img]: https://img.shields.io/badge/license-CC--BY--NC--SA--4.0-green?style=flat-square
[badge-2-link]: ./LICENSE
[badge-3-img]: https://img.shields.io/badge/code_style-standard-green?style=flat-square
[badge-3-link]: https://standardjs.com

[source-srht]: https://git.sr.ht/~paemuri/www
[source-codeberg]: https://codeberg.org/paemuri/www
[source-github]: https://github.com/paemuri/www

[license-code]: ./LICENSES/AGPL-3.0-or-later.txt
[license-content]: ./LICENSES/CC-BY-NC-SA-4.0.txt
