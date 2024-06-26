import { ApplicationCommandOptionType } from "discord.js";
import {
  ErrorEmbed,
  SuccessEmbed,
  WarningEmbed,
} from "../../modules/Embeds.js";

export const data = {
  name: "swap",
  description: "Swap the position of two songs in the queue",
  options: [
    {
      name: "first",
      description: "The position of the first song",
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 1,
    },
    {
      name: "second",
      description: "The position of the second song",
      type: ApplicationCommandOptionType.Number,
      required: true,
      min_value: 1,
    },
  ],
  category: "music",
  queueOnly: true,
  validateVC: true,
};
export function execute(interaction, queue) {
  if (queue.size < 2) {
    return interaction.reply({
      ephemeral: true,
      embeds: [
        ErrorEmbed("There has to be at least 2 songs in the queue to swap."),
      ],
    });
  }

  const first = interaction.options.getNumber("first", true) - 1;
  const second = interaction.options.getNumber("second", true) - 1;

  if (first >= queue.size || second >= queue.size) {
    return interaction.reply({
      ephemeral: true,
      embeds: [WarningEmbed("The specified positions are not valid.")],
    });
  }

  if (first === second) {
    return interaction.reply({
      ephemeral: true,
      embeds: [
        WarningEmbed("The songs are already in their current positions."),
      ],
    });
  }

  queue.node.swap(first, second);

  return interaction.reply({
    embeds: [
      SuccessEmbed(
        `Songs at positions ${first + 1} and ${second + 1} have been swapped.`
      ),
    ],
  });
}
