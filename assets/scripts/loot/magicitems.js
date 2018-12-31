const magicItems = {
  edition: {
    DMG: {
      weapons: [{
        'name': 'Battleaxe of Warning',
        'type': 'M',
        'magic': '1',
        'weight': '4',
        'dmg1': '1d8',
        'dmg2': '1d10',
        'dmgType': 'S',
        'property': 'V',
        'rarity': 'Uncommon',
        'text': [
          'Rarity: Uncommon',
          'Requires Attunement',
          'This magic weapon warns you of danger. While the weapon is on your person, you have advantage on initiative rolls. In addition, you and any of your companions within 30 feet of you can\'t be surprised, except when incapacitated by something other than nonmagical sleep. The weapon magically awakens you and your companions within range if any of you are sleeping naturally when combat begins.',
          'Versatile: This weapon can be used with one or two hands. A damage value in parentheses appears with the property \u2014 the damage when the weapon is used with two hands to make a melee attack.'
        ]
      },
      {
        'name': 'Berserker Battleaxe',
        'type': 'M',
        'magic': '1',
        'weight': '4',
        'dmg1': '1d8',
        'dmg2': '1d10',
        'dmgType': 'S',
        'property': 'V',
        'rarity': 'Rare',
        'text': [
          'Rarity: Rare',
          'Requires Attunement',
          'You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.',
          'Curse: This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.',
          'Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.',
          'Versatile: This weapon can be used with one or two hands. A damage value in parentheses appears with the property \u2014 the damage when the weapon is used with two hands to make a melee attack.'
        ],
        'modifier': [
          {
            'category': 'bonus',
            'text': 'melee attacks +1'
          },
          {
            'category': 'bonus',
            'text': 'melee damage +1'
          }
        ]
      },
      {
        'name': 'Berserker Greataxe',
        'type': 'M',
        'magic': '1',
        'weight': '7',
        'dmg1': '1d12',
        'dmgType': 'S',
        'property': 'H,2H',
        'rarity': 'Rare',
        'text': [
          'Rarity: Rare',
          'Requires Attunement',
          'You gain a +1 bonus to attack and damage rolls made with this magic weapon. In addition, while you are attuned to this weapon, your hit point maximum increases by 1 for each level you have attained.',
          'Curse: This axe is cursed, and becoming attuned to it extends the curse to you. As long as you remain cursed, you are unwilling to part with the axe, keeping it within reach at all times. You also have disadvantage on attack rolls with weapons other than this one, unless no foe is within 60 feet of you that you can see or hear.',
          'Whenever a hostile creature damages you while the axe is in your possession, you must succeed on a DC 15 Wisdom saving throw or go berserk. While berserk, you must use your action each round to attack the creature nearest to you with the axe. If you can make extra attacks as part of the Attack action, you use those extra attacks, moving to attack the next nearest creature after you fell your current target. If you have multiple possible targets, you attack one at random. You are berserk until you start your turn with no creatures within 60 feet of you that you can see or hear.',
          'Heavy: Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon\'s size and bulk make it too large for a Small creature to use effectively.',
          'Two-Handed: This weapon requires two hands to use.'
        ],
        'modifier': [
          {
            'category': 'bonus',
            'text': 'melee attacks +1'
          },
          {
            'category': 'bonus',
            'text': 'melee damage +1'
          }
        ]
      }]
    },
    POTA: {
      weapons: [{
        'name': 'Orcsplitter',
        'type': 'M',
        'magic': '1',
        'weight': '7',
        'dmg1': '1d12',
        'dmgType': 'S',
        'property': 'H,2H',
        'text': [
          'Requires Attunement by a good-aligned dwarf, fighter, or paladin',
          'A mighty axe wielded long ago by the dwarf king Torhild Flametongue, Orcsplitter is a battered weapon that appears unremarkable at first glance. Its head is graven with the Dwarvish runes for \'orc,\' but the runes are depicted with a gap or slash through the markings; the word \'orc\' is literally split in two.',
          'You gain the following benefits while holding this magic weapon:',
          '\u2022 You gain a +2 bonus to attack and damage rolls made with it.',
          '\u2022 When you roll a 20 on an attack roll with this weapon against an orc, that orc must succeed on a DC 17 Constitution saving throw or drop to 0 hit points.',
          '\u2022 You can\'t be surprised by orcs while you\'re not incapacitated. You are also aware when orcs are within 120 feet of you and aren\'t behind total cover, although you don\'t know their location.',
          '\u2022 You and any of your friends within 30 feet of you can\'t be frightened while you\'re not incapacitated.',
          'Sentience: Orcsplitter is a sentient, lawful good weapon with an Intelligence of 6, a Wisdom of 15, and a Charisma of 10. It can see and hear out to 120 feet and has darkvision. It communicates by transmitting emotions to its wielder, although on rare occasions it uses a limited form of telepathy to bring to the wielder\'s mind a couplet or stanza of ancient Dwarvish verse.',
          'Personality: Orcsplitter is grim, taciturn, and inflexible. It knows little more than the desire to face orcs in battle and serve a courageous, just wielder. It disdains cowards and any form of duplicity, deception, or disloyalty. The weapon\'s purpose is to defend dwarves and to serve as a symbol of dwarven resolve. It hates the traditional foes of dwarves \u2014 giants, goblins, and, most of all, orcs \u2014 and silently urges its possessor to meet such creatures in battle.',
          'Heavy: Small creatures have disadvantage on attack rolls with heavy weapons. A heavy weapon\'s size and bulk make it too large for a Small creature to use effectively.',
          'Two-Handed: This weapon requires two hands to use.',
          'Source: Princes of the Apocalypse, page 224'
        ],
        'modifier': [
          {
            'category': 'bonus',
            'text': 'melee attacks +2'
          },
          {
            'category': 'bonus',
            'text': 'melee damage +2'
          }
        ]
      },
      {
        'name': 'Tinderstrike',
        'type': 'M',
        'magic': '1',
        'weight': '1',
        'dmg1': '1d4',
        'dmgType': 'P',
        'property': 'F,L,T',
        'range': '20/60',
        'text': [
          'Requires Attunement',
          'A flint dagger, Tinderstrike is uncommonly sharp, and sparks cascade off its edge whenever it strikes something solid. Its handle is always warm to the touch, and the blade smolders for 1d4 minutes after it is used to deal damage. It contains a spark of Imix, Prince of Evil Fire.',
          'You gain a +2 bonus to attack and damage rolls you make with this magic weapon. When you hit with it, the target takes an extra 2d6 fire damage.',
          'Fire Mastery: You gain the following benefits while you hold Tinderstrike:',
          '\u2022 You can speak Ignan fluently.',
          '\u2022 You have resistance to fire damage.',
          '\u2022 You can cast dominate monster (save DC 17) on a fire elemental. Once you have done so, Tinderstrike can\'t be used this way again until the next dawn.',
          'Dance of the All-Consuming Fire: While inside a fire node, you can perform a ritual called the Dance of the All-Consuming Fire, using Tinderstrike to create a devastation orb of fire (see the devastation orb description for the time and cost of the ritual). Once you perform the ritual, Tinderstrike can\'t be used to perform the ritual again until the next dawn.',
          'Flaw: Tinderstrike makes its wielder impatient and rash. While attuned to the weapon, you gain the following flaw: \'I act without thinking and take risks without weighing the consequences.',
          'Finesse: When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.',
          'Light: A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.',
          'Range: A weapon that can be used to make a ranged attack has a range shown in parentheses after the ammunition or thrown property. The range lists two numbers. The first is the weapon\'s normal range in feet, and the second indicates the weapon\'s maximum range. When attacking a target beyond normal range, you have disadvantage on the attack roll. You can\'t attack a target beyond the weapon\'s long range',
          'Thrown: If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.',
          'Source: Princes of the Apocalypse, page 224'
        ],
        'modifier': [
          {
            'category': 'bonus',
            'text': 'weapon attacks +2'
          },
          {
            'category': 'bonus',
            'text': 'weapon damage +2'
          }
        ],
        'roll': '2d6'
      }
      ]
    }

  }
}
