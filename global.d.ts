declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      dragControls: ReactThreeFiber.Object3DNode<
        DragControls,
        typeof DragControls
      >;
    }
  }
}
