#!/bin/bash

echo "Packing files for GCF ..."

zip GCF {./Crawl_Parking_Structures.py,./MongoDbConnection.py,./Parking_Structure.py,./main.py,./requirements.txt}

echo "Finished Packing"