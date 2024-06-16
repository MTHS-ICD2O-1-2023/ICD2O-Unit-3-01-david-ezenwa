// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: David.E
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateAreaOfTrapezoid() {
  // input
  const baseA = parseFloat(document.getElementById('base-a').value)
  const baseB = parseFloat(document.getElementById('base-b').value)
  const heightOfTrapizoid = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const areaOfTrapezoid = (baseA + baseB) * heightOfTrapizoid / 2

  // output
  document.getElementById("area").innerHTML = 'Area is: ' + areaOfTrapezoid + ' mm²'
}