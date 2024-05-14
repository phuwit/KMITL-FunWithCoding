#!/bin/bash

if [ "$1" = "" ]
then
    echo "No arguments supplied"
    exit
fi

echo "$1"

if [ "$2" != "" ]
then
    echo "$2"
fi

if [ "$3" != "" ]
then
    echo "$3"
fi