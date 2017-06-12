# 3D Cube with pure HTML, CSS and JavaScript

No need with other plugins.

1. Set perspective for container

```css
.cubic-container {
	...
	-webkit-perspective: 2000px;
	perspective: 2000px;
}
```

2. Set main element's style with transform-style: preserve-3d

```css
.cube {
	...
	transform-style: preserve-3d;
}
```

3. Every single cube's transform should rotate first then translate position, if you change the order, you'll get different result.

```css
.cube {
	...
	transform: rotateY(90deg) translateZ(150px);
}
```