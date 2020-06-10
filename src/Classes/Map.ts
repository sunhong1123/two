﻿class Map {
	public static aSampleMap = [
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
		[2, 0, 2, 0, 1, 0, 2, 1, 1, 0, 2, 2],
		[2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 2, 2],
		[2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2],
		[2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 2],
		[2, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 2],
		[2, 4, 4, 4, 4, 4, 4, 4, 2, 0, 0, 2],
		[2, 3, 3, 3, 4, 2, 2, 2, 2, 2, 0, 2],
		[2, 4, 4, 4, 4, 2, 0, 2, 0, 0, 0, 2],
		[2, 0, 1, 1, 1, 1, 1, 0, 2, 0, 1, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
	];

	public static exampleMap = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 2, 0, 0, 0],
		[0, 0, 0, 2, 0, 0, 0],
		[0, 0, 0, 2, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
	];

	public static aBigMap = [
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
		[2, 0, 2, 0, 1, 0, 2, 1, 1, 0, 2, 4, 3, 3, 4, 3, 3, 3, 4, 0, 4, 4, 0, 4, 3, 4, 0, 0, 0, 0, 2, 0, 1, 0, 0, 1, 1, 0, 0, 2],
		[2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 2, 4, 3, 4, 4, 4, 4, 4, 4, 0, 2, 4, 0, 4, 3, 4, 0, 2, 0, 2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 2],
		[2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 0, 0, 4, 3, 4, 0, 2, 0, 2, 2, 0, 1, 1, 1, 0, 2, 2, 0, 2],
		[2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 3, 4, 0, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 1, 0, 2],
		[2, 0, 1, 1, 1, 1, 1, 0, 2, 0, 1, 1, 4, 3, 4, 2, 0, 1, 0, 0, 1, 1, 1, 4, 3, 4, 0, 0, 0, 2, 2, 0, 1, 1, 1, 0, 2, 2, 0, 2],
		[2, 4, 4, 4, 4, 4, 4, 4, 2, 0, 0, 1, 4, 3, 4, 0, 0, 1, 0, 0, 1, 0, 0, 4, 3, 2, 2, 2, 0, 2, 2, 0, 1, 1, 0, 0, 0, 2, 3, 2],
		[2, 3, 3, 3, 4, 2, 2, 2, 2, 2, 0, 1, 4, 3, 4, 1, 0, 1, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 2, 2, 0, 2],
		[2, 4, 4, 4, 4, 2, 0, 0, 0, 0, 0, 1, 4, 3, 4, 1, 1, 1, 0, 1, 1, 0, 4, 4, 3, 4, 0, 2, 2, 0, 0, 3, 3, 3, 0, 2, 2, 2, 0, 2],
		[2, 0, 1, 0, 4, 2, 0, 2, 1, 1, 1, 1, 4, 3, 4, 1, 0, 0, 0, 0, 1, 0, 0, 4, 3, 4, 0, 0, 0, 2, 0, 0, 1, 0, 4, 0, 0, 0, 0, 2],
		[2, 0, 0, 0, 4, 2, 0, 2, 0, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 3, 4, 4, 4, 4, 2, 0, 0, 0, 0, 4, 2, 0, 2, 4, 2],
		[2, 1, 1, 0, 4, 4, 0, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 1, 0, 4, 4, 0, 2, 0, 4, 2],
		[2, 0, 1, 1, 0, 0, 0, 2, 0, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 2, 0, 2],
		[2, 4, 4, 4, 4, 2, 0, 0, 0, 0, 0, 1, 4, 3, 4, 1, 1, 1, 3, 3, 3, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 0, 2],
		[2, 0, 1, 0, 4, 2, 0, 2, 1, 1, 1, 1, 4, 3, 4, 1, 0, 0, 3, 4, 4, 3, 2, 2, 2, 0, 2, 2, 2, 2, 0, 1, 0, 4, 2, 0, 2, 1, 1, 2],
		[2, 0, 0, 0, 4, 2, 0, 2, 0, 4, 4, 4, 4, 3, 4, 4, 4, 4, 3, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 4, 2, 0, 2, 1, 2],
		[2, 1, 1, 0, 4, 4, 0, 2, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 0, 1, 0, 4, 2, 0, 2, 1, 2],
		[2, 0, 1, 1, 0, 0, 0, 2, 0, 4, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 0, 1, 0, 4, 2, 0, 2, 1, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
		[2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 3, 4, 4, 4, 4, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2],
		[2, 0, 2, 0, 1, 0, 2, 1, 1, 0, 2, 4, 3, 3, 4, 3, 3, 3, 4, 0, 4, 4, 0, 4, 4, 4, 0, 0, 0, 0, 2, 0, 1, 0, 2, 1, 1, 0, 2, 2],
		[2, 0, 2, 0, 1, 0, 0, 0, 0, 0, 2, 4, 3, 4, 4, 4, 4, 4, 4, 0, 2, 4, 0, 4, 3, 4, 0, 2, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 2],
		[2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 3, 4, 2, 2, 2, 2, 2, 2, 2, 0, 0, 4, 3, 4, 0, 2, 0, 2, 0, 0, 1, 0, 0, 0, 2, 2, 2, 2],
		[2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 4, 3, 4, 0, 2, 2, 2, 2, 0, 1, 0, 1, 0, 2, 2, 2, 2],
		[2, 0, 1, 1, 1, 1, 1, 0, 2, 0, 1, 1, 4, 3, 4, 2, 0, 1, 0, 0, 1, 1, 1, 4, 3, 4, 0, 0, 0, 2, 2, 0, 0, 0, 1, 0, 4, 4, 4, 2],
		[2, 4, 4, 4, 4, 4, 4, 4, 2, 0, 0, 1, 4, 3, 4, 0, 0, 1, 0, 0, 1, 0, 0, 4, 3, 2, 2, 2, 0, 2, 2, 0, 1, 1, 0, 0, 2, 2, 2, 2],
		[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
	]
}