// |reftest| error:SyntaxError
// Copyright (C) 2017 Lucas Azzola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Lucas Azzola
esid: pending
description: >
  It is a SyntaxError to have a try/catch statement with an empty CatchParameter
features: [optional-catch-binding]
info: |
  Catch[Yield, Await, Return]:
    catch ( CatchParameter[?Yield, ?Await] ) Block[?Yield, ?Await, ?Return]
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

try {} catch () {}

