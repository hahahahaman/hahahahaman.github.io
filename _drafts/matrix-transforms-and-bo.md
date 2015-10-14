---
layout: post
title: Breakout and Matrix Transforms
---

## Playing around with OpenGL

I've been working through parts of this [tutorial](http://learnopengl.com) for
some time, converting the C++ into Common Lisp. OpenGL is pretty annoying just
because it's kind of low level and thus you have to be specific about what you
want it to do; I spent some days looking for one or omissions in my code, which
was the difference between what I expected and a blank screen. The author writes
straightforward tutorials, that outline the concepts pretty well, but I've noticed
while following them that there is something about the stylistic approach which
drives me to write it another way. It could be the translation between C++ and
Common Lisp, but actually the cl-opengl mappings allow for basically
the same approach to writing the code. I think it has to do with the fact that
since I'm taking a more _active_ means of following the tutorial by basically
rewriting the code, I don't copy and paste core parts that I want working and
instead try to write something that I think _feels_ better in my head, and I
think reading more lisp code has affected my preferences.

It's been several months since I first touched OpenGL and in that time I've
changed the way I look at abstractions. I'm trying more and more to give up
classes and structs, replacing them with data structures, like associative arrays
(aka hashtables/dictionaries/maps, things along those lines).

## More interactive programming

## Prototyping matrix transforms

Inspired by hexcells infinite, I had the concept of a simple puzzle game that
had non-trivial problems that could increase in complexity pretty easily.

## Sharing is difficult

On day 4 the mechanics worked. But in my opinion it is not enough to
have the bare bones concept working; this is from giving games to people to try
out before, and having to witness their confusion. I suppose it isn't much of my
time, but I don't even have text rendering yet, so I'll have to put that in, in
order to give instructions.

## When is a game done?
