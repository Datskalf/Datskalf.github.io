import os, pathlib

files = os.listdir(os.path.join(pathlib.Path(__file__).parent, 'Tine Joramo'))

for i, file in enumerate(files):
	os.rename(os.path.join(pathlib.Path(__file__).parent, 'Tine Joramo', file), os.path.join(pathlib.Path(__file__).parent, 'Tine Joramo', 'TJ_{}.jpg'.format(i+1)))
