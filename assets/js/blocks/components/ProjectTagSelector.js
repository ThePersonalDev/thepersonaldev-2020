import {Component} from '@wordpress/element'
import {PanelRow, SelectControl, Spinner} from '@wordpress/components'

// @see https://www.ibenic.com/create-gutenberg-block-displaying-post/
export default class ProjectGridTagSelector extends Component {
  /**
   * Generate
   */
  static getInitialState () {
    return {
      tags: []
    }
  }
 
  /**
   * Set state
   */
  constructor () {
    super(...arguments)
    this.state = this.constructor.getInitialState()
  }

  /**
   * Render the multiselect field
   */
  render () {
    return (this.props.tags
      ? <PanelRow>
          <SelectControl multiple label={this.props.label} value={this.props.selectedTags} options={this.props.tags} onChange={this.props.onChange} />
        </PanelRow>

      : <Spinner />
    )
  }
}