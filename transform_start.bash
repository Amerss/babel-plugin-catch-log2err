#!/bin/bash

if [ -z $1 ]; then
	echo Release file path not set, required.
	exit 1
else
	echo Release file path set to: $1
fi

file_name=$1

./node_modules/.bin/babel $file_name --out-dir __test__/out_put_test
