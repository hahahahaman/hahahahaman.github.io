---
layout: post
title: Adding text, the weekly update.
---

### freetype2

Adding text was tiring, but I've gotten better at figuring out how to use
opengl, which is alright. It's actually really a pain in the ass to add
features, because I have to learn the common lisp library associated with
whatever
[tutorial](https://en.wikibooks.org/wiki/OpenGL_Programming/Modern_OpenGL_Tutorial_Text_Rendering_01)
I'm referencing from. Common Lisp libraries are pretty annoying since they
usually don't come with much documentation
(this is also part of the fun though),
[cl-freetype2](https://github.com/rpav/cl-freetype2) is pretty lacking in its
explanation, so I dove in for a few days looking at the way it's setup. It's
pretty clever? the way it's been written, I'm actually not sure since I don't
look at ffi stuff too much. The most confusing part about it was this group of
_wrap_ macros that created lisp functions and objects around the foreign
objects, for instance _defcwraptype_ does stuff like making access to a C
structs the same as one would access Lisp structs\; this was weird because I
inspected these objects and thought they were foreign. It's pretty nice and
simple, after I finally understood what was going on\; really the only goal was
to abstract the foreign stuff to be more lispy, but I thought I had to approach
everything as if it was foreign to access the info I need for the tutorial. Text
drawing works now, but I'm kind of dishearten by the impending work to get sound
in [err](https://github.com/hahahahaman/err).

### general outlook

I've been listening to this rachmaninoff symphony 2 op 27 iii a lot. It
has this wondering feeling about it.

My time working on my personal projects is beginning to worry me a bit. Now that
I can, I constantly indulge in my obsessive tendencies in my work and it's
becoming difficult to sleep at times. In trying to fix bugs I'm staying up until
7-9am looking at the problem, unable to sleep till the feeling of collapsing
starts to settle in. I can't seem to stop because of an anger of its inadequacy.
I can feel my metabolism slowing down, from sitting so long everyday, sleeping
so late and so irregularly, not exercising, and eating fatty foods at night. I
think I've gain some weight, perhaps around 5 pounds. I'm unable to concentrate
on regular day stuff, like getting food, my eating regiment is pretty irregular.
I'm having a hard time remembering where I put things.

Part of me want to look at other things, I got _We the Living_ from the library
a week or two ago, and I've barely touched it. A couple months back I doing math
problems for fun, I have mostly given this up. I now have some desire to learn
about the sciences and learn more about computer science related things, but I
never get to it.

I think most of all, I'm worried that my progress still feels too slow.

This all may seem rather damaging, but I'm much happier about my current
lifestyle than I've been for a long time.
