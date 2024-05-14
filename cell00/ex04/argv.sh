#!/bin/bash

# length of $1 is zero
if [ -z "$1" ]
then
    echo "No arguments supplied"
    exit
fi

echo "$1"

# length of $2 is NOT zero
if [ -n "$2" ]
then
    echo "$2"
fi

# length of $3 is NOT zero
if [ -z "$3" ]
then
    echo "$3"
fi