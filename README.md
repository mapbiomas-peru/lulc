# 🌱 MapBiomas Peru — LULC Collection 1 (1985–2021)

## 🧭 Overview

**Collection 1** is the first annual Land Use and Land Cover (LULC) time series produced by MapBiomas Peru, covering the period **1985–2021** at 30 m spatial resolution.

This repository contains the full processing workflow implemented in Google Earth Engine (GEE), including mosaic generation, classification, post-processing filters, and validation procedures.

The methodological foundation is documented in the *Algorithm Theoretical Basis Document (ATBD) – Collection 1.0*.

---

## 🗺 Study Area

- Country: Peru (continental territory)
- Total area: ~1.29 million km²
- Biomes:
  - Amazon
  - Andes
  - Dry Forest
  - Coastal Desert

Processing is performed using a 1:250,000 tile grid (107 tiles covering the country).

---

## 🛰 Input Data

### Satellite Data

- Landsat 4 TM  
- Landsat 5 TM  
- Landsat 7 ETM+  
- Landsat 8 OLI  
- Collection 2 – Tier 1 – Surface Reflectance  
- Period: 1985–2021  

All processing is executed in Google Earth Engine.

---

## 🌿 LULC Classes (Collection 1)

- Forest  
- Dry Forest  
- Mangrove  
- Flooded Forest  
- Wetland / Flooded Grassland  
- Grassland  
- Shrubland  
- Pasture  
- Agriculture  
- Forest Plantation  
- Mosaic of Agriculture and Pasture  
- Urban Infrastructure  
- Mining  
- Other Non-Vegetated Area  
- River / Lake  
- Glacier  

---

## 🔄 Transition Maps

Derived products include:

- Annual transitions (year-to-year)  
- 5-year transitions  
- 10-year transitions  
- Full-period transitions (1985–2021)  

---

## 📊 Outputs

- Annual LULC maps (1985–2021)  
- Transition maps  
- Mosaic assets  
- Classification scripts  
- Area statistics  
- Accuracy reports  

All outputs are generated and stored as GEE assets.

---

## 🧩 Repository Structure (Example)

