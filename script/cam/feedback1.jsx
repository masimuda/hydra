s0.initCam();
src(o0)
	.scale(1.01)
	.layer(src(s0)
		.invert()
		.luma()
		.invert()
		.mult(osc(1.927, 0.089, 1)))
	.out();