#!/bin/bash

# for every args
for number in "$@"
do
    # create folder name by appending number variable
    folder_name="ex${number}"
    mkdir "$folder_name"
done
