<template>
  <div :id="id"></div>
</template>

<script>
/* eslint-disable new-cap, no-new */
import 'mxgraph/javascript/src/css/common.css'
import '@/styles/mxGraph.less'
const mxgraph = require('mxgraph')({
  mxLoadStylesheets: false,
  mxLoadResources: false
})
const {
  mxGraph,
  mxCompactTreeLayout,
  mxLayoutManager,
  mxCylinder,
  mxCellRenderer,
  mxConstants,
  mxEdgeStyle,
  mxGraphView,
  mxPoint,
  mxKeyHandler,
  mxEvent,
  mxUtils
} = mxgraph
export default {
  props: ['id', 'data'],
  data () {
    return {
      graph: null
    }
  },
  watch: {
    data () {
      this.resize()
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      let graph = this.graph = new mxGraph(document.getElementById(this.id))
      graph.keepEdgesInBackground = true
      graph.setAutoSizeCells(true)
      graph.setCellsSelectable(false)
      graph.setCellsEditable(false)
      graph.setAllowDanglingEdges(false)
      graph.setPanning(true)
      graph.panningHandler.useLeftButtonForPanning = true
      new mxKeyHandler(graph)
      let style = graph.getStylesheet().getDefaultVertexStyle()
      style[mxConstants.STYLE_SHAPE] = 'treenode'
      style[mxConstants.STYLE_GRADIENTCOLOR] = 'white'
      style[mxConstants.STYLE_SHADOW] = true
      style[mxConstants.STYLE_FONTFAMILY] = 'Helvetica,Arial'
      style[mxConstants.STYLE_FONTSIZE] = 14
      style = graph.getStylesheet().getDefaultEdgeStyle()
      style[mxConstants.STYLE_EDGE] = mxEdgeStyle.TopToBottom
      style[mxConstants.STYLE_ROUNDED] = true
      let layout = new mxCompactTreeLayout(graph, false)
      layout.useBoundingBox = false
      layout.edgeRouting = false
      layout.levelDistance = 35
      layout.nodeDistance = 25
      let layoutMgr = new mxLayoutManager(graph)
      layoutMgr.getLayout = function (cell) {
        if (cell.getChildCount() > 0) {
          return layout
        }
      }
      let toggleTooltip = (graph, display) => {
        let tooltipHandler = graph.tooltipHandler
        if (tooltipHandler != null) {
          let div = tooltipHandler.div
          if (div != null) {
            div.style.display = display ? 'block' : 'none'
          }
        }
      }
      graph.setTooltips(true)
      graph.getTooltipForCell = function (cell) {
        toggleTooltip(this, true)
        return cell.value.text
      }
      graph.getLabel = function (cell) {
        return cell.value.name
      }
      mxEvent.addListener(graph.container, 'mouseleave', mxUtils.bind(graph, function () {
        toggleTooltip(this)
      }))
      this.resize()
    },
    resize () {
      let { vertex, edge } = this.data
      if (!vertex) {
        return
      }
      let graph = this.graph
      let getCell = id => graph.getModel().getCell(id)
      graph.getModel().clear()
      let parent = graph.getDefaultParent()
      graph.getModel().beginUpdate()
      try {
        let w = graph.container.offsetWidth
        let { id, value, x, y, width, height, children } = vertex
        graph.insertVertex(parent, id, value, x === 'center' ? (w - width) / 2 : x, y, width, height)
        let addVertex = children => {
          if (!children) {
            return
          }
          for (let cell of children) {
            let { id, value, width, height, children } = cell
            graph.insertVertex(parent, id, value, 0, 0, width, height)
            addVertex(children)
          }
        }
        addVertex(children)
        for (let cell of edge) {
          let { sourceId, targetId } = cell
          graph.insertEdge(parent, null, '', getCell(sourceId), getCell(targetId))
        }
      } finally {
        graph.getModel().endUpdate()
        graph.fit()
        graph.center()
      }
    }
  }
}
class TreeNodeShape extends mxCylinder {
  constructor (state) {
    super()
    this.state = state
  }
  redrawPath (path, x, y, w, h, isForeground) {
    let graph = this.state.view.graph
    let hasChildren = graph.model.getOutgoingEdges(this.state.cell).length > 0
    if (isForeground) {
      if (hasChildren) {
        path.moveTo(w / 2, h + this.segment)
        path.lineTo(w / 2, h)
        path.end()
      }
    } else {
      path.moveTo(0, 0)
      path.lineTo(w, 0)
      path.lineTo(w, h)
      path.lineTo(0, h)
      path.close()
    }
  }
}
TreeNodeShape.prototype.segment = 30
mxCellRenderer.registerShape('treenode', TreeNodeShape)
mxGraphView.prototype.updateFloatingTerminalPoint = function (edge, start, end, source) {
  let pt = null
  if (source) {
    pt = new mxPoint(start.x + start.width / 2,
    start.y + start.height + TreeNodeShape.prototype.segment * this.scale)
  } else {
    pt = new mxPoint(start.x + start.width / 2, start.y)
  }
  edge.setAbsoluteTerminalPoint(pt, source)
}
</script>
