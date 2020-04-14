import {registerBlockType} from '@wordpress/blocks'
import {createElement} from '@wordpress/element'
import {RichText} from '@wordpress/block-editor'

const icon = createElement('svg', {viewBox: '0 0 512 512'},
	createElement('path', {d: 'M448 96v320h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H320a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V288H160v128h32a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h32V96H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16h-32v128h192V96h-32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16z'})
)

registerBlockType('tpd/captioned-heading', {
  title: 'Captioned Heading',
  icon,
  category: 'theme_blocks',
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h2'
    }
  },
  example: {
    heading: 'Heading'
  },
 
  edit: props => {
    const {
      className,
      attributes: {heading},
      setAttributes
    } = props
    
    const onChangeHeading = newHeading => {
      setAttributes({heading: newHeading})
    }
    
    return (
      <div className={className}>
        <RichText
          tagName="h2"
          placeholder="Heading text"
          label='Heading'
          onChange={onChangeHeading}
          value={heading}
        />
      </div>
    )
  },

  save: props => {
    const {
      className,
      attributes: {heading}
    } = props
    
    return (
      <div className={className}>
        <RichText.Content tagName='h2' value={heading} />
      </div>
    )
  }
})