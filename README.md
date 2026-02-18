# 🌱 MapBiomas Peru — LULC Collection 2 (1985–2022)

## 🧭 Overview

**Collection 2** is the second official annual Land Use and Land Cover (LULC) time series produced by MapBiomas Peru, covering the period **1985–2022** at 30 m spatial resolution.

This repository contains the full processing workflow implemented in Google Earth Engine (GEE), including mosaic generation, classification, post-processing filters, temporal consistency improvements, and validation procedures.

Collection 2 represents methodological improvements over Collection 1, including refinements in training data, feature selection, classification strategies, and temporal filtering.

The methodological foundation is documented in the official ATBD:

📄 **Algorithm Theoretical Basis Document (ATBD) – Collection 2.0**  
https://peru.mapbiomas.org/wp-content/uploads/sites/14/2024/02/ATBD-General-MapBiomas-Peru-Coleccion-2.0.pdf

## ✨ What’s New in Collection 2

Collection 2 introduces important methodological and structural improvements compared to Collection 1, enhancing temporal consistency, classification robustness, and overall map reliability.

Key improvements include:

- 🔄 **Extended Time Series**  
  Updated coverage through **2022**, incorporating the most recent available Landsat data.

- 🗂 **Legend Refinement and New Classes**

  Collection 2 expands and refines the thematic legend with additional land-use categories, including:

  - Flooded grassland / shrubland  
  - Salt flat  
  - Oil palm  
  - Aquaculture  

- 🛰 **Landsat Collection 2 Integration**  
  Migration to Landsat Collection 2 Surface Reflectance products, improving radiometric consistency and geometric accuracy.

- 🧠 **Improved Training Dataset**  
  Expanded and refined reference samples across biomes, increasing representativeness and class separability.

- 🔎 **Refined Classification Strategy**  
  Improved Random Forest parameterization and biome-specific modeling adjustments.

- 🧩 **Advanced Post-Classification Filtering**  
  More robust temporal, spatial, and frequency filters to reduce noise and enforce logical land-use transitions.


