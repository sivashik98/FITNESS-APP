#!/bin/bash

rm -rf node_modules
yarn cache clean
yarn
watchman watch-del-all
rm -fr $TMPDIR/haste-map-*
rm -rf $TMPDIR/metro-cache
npx expo prebuild --clean --yarn
npx expo run ios -d




