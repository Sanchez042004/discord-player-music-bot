import { ErrorEmbed, SuccessEmbed } from "../../modules/Embeds.js";

export const data = {
  name: "resume",
  description: "Resume the playback",
  category: "music",
  queueOnly: true,
  validateVC: true,
};
export function execute(interaction, queue) {
  if (queue.isPlaying())
    return interaction.reply({
      ephemeral: true,
      embeds: [ErrorEmbed("The playback is not paused.")],
    });

  queue.node.resume();

  return interaction.reply({
    embeds: [SuccessEmbed("Resumed the playback.")],
  });
}
