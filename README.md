# React card memory game app

Game that tests your memory by asking you to click cards you haven't seen yet.

![Card game demo](https://user-images.githubusercontent.com/46179386/124510857-97162100-dd89-11eb-8cc7-0aaf81ee8773.gif)

---

## Usage

Go the the [card memory game](https://jql6.github.io/memory-game/) and test your
memory! To play the game, just click cards that you haven't seen yet. This
resets once you've either won or lost the round. You lose if you click a card
that you've already seen this round. You win if you click all of the possible
cards.

## Details

A round starts when your score is at 0 and ends once you've lost or won.

The display only shows 6 cards from the card pool. The card pool currently
consists of cards with Spades and Hearts suits and excludes Diamonds and Clubs
suits.

### What if all of the cards that are displayed are ones that I've already clicked?

You are guaranteed to have at least one card in the display that you haven't
clicked before.
