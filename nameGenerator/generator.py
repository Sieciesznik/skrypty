from string import ascii_lowercase
from random import randint

regions = [(1,'poland_male'),(2, 'poland_female'),(3, 'chille_male'),(4, 'england_male'),(5, 'england_female'),(6, 'denmark_male'),(7, 'sweden_female'),(8, 'test')]

for r in regions:
    print(str(r[0]) + '. ' + r[1])

reg = input('Choose scope: ')

with open(regions[int(reg)-1][1] + '.txt','r') as namesFile:
	lines = namesFile.readlines()
"""
if reg == '1' or reg == '2':
	with open(regions[int(reg)-1][1] + '_surnames.txt','r') as surnamesFile:
		surlines = surnamesFile.readlines()
"""
	
alph = ascii_lowercase
alph += '#'

letters = {key:[0,{letter:0 for letter in alph}] for key in alph}
surletters = {key:[0,{letter:0 for letter in alph}] for key in alph}


for name in lines:
	for i in range(len(name)):
		try:
			if name[i+1].lower() != '\n':
				letters[name[i].lower()][1][name[i+1].lower()] += 1
			else:
				letters[name[i].lower()][1]['#'] += 1
			letters[name[i].lower()][0] += 1
		except:
			pass
"""
for surname in surlines:
	for i in range(len(surname)):
		try:
			if surname[i+1].lower() != '\n':
				surletters[surname[i].lower()][1][surname[i+1].lower()] += 1
			else:
				surletters[surname[i].lower()][1]['#'] += 1
			surletters[surname[i].lower()][0] += 1
		except:
			pass
"""
			
			
while True:
	#print(letters)
	c = input('How many names do you want?')
	if c == '0':
		break;
	for i in range(int(c)):
		success = False
		name = ''
		while success == False:
			name = ''
			first = ascii_lowercase[randint(0, len(ascii_lowercase)-1)]
			name += first
			next = '#'
			finnished = False
			while finnished == False:
				nextNum = randint(0, letters[first][0])
				for k,v in letters[first][1].items():
					nextNum -= v
					if nextNum <= 0:
						if k != '#':
							name += k
							first = k
							break
						else:
							if len(name) >= 4 and len(name) <= 12:
								success = True
								#if reg != '1' and reg != '2':
								#	print(name)
								print(name)
									
							finnished = True
							break
"""		
		if reg == '1' or reg == '2':
			success = False
			while success == False:
				surname = ''
				first = ascii_lowercase[randint(0, len(ascii_lowercase)-1)]
				surname += first
				next = '#'
				finnished = False
				while finnished == False:
					nextNum = randint(0, surletters[first][0])
					for k,v in surletters[first][1].items():
						nextNum -= v
						if nextNum <= 0:
							if k != '#':
								surname += k
								first = k
								break
							else:
								if len(surname) >= 4:
									success = True
									print(name + ' ' + surname)
								finnished = True
								break
"""