// compile

// Copyright 2023 The Go Authors. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

// Issue 59169: caused gofrontend crash.

package p

func F(p *[]byte) {
	*(*[1]byte)(*p) = *(*[1]byte)((*p)[1:])
}
