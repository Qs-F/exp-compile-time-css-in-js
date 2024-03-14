import type {MacroContext} from '@parcel/macros';
import { serializeStyles } from '@emotion/serialize'

export function css(this: MacroContext | void, style: Parameters<typeof serializeStyles>[0]) {
  const s = serializeStyles(style, undefined, undefined)

  const className = `test-${s.name}`

  this?.addAsset({
    type: 'css',
    content: `.${className} { ${s.styles} }`,
  });

  return className;
}
