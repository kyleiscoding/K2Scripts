$(document).ready(function() {
  // Define the data for each card (title, subtitle, icon)
  const cardsData = [
    {
      labelName: 'dl_ActiveCount',
      title: 'ACTIVE',
      subtitle: 'Currently Active Requests',
      iconClass: 'active-icon'
    },
    {
      labelName: 'dl_UrgentCount',
      title: 'URGENT',
      subtitle: 'Urgent Requests',
      iconClass: 'urgent-icon'
    },
    {
      labelName: 'dl_OverdueCount',
      title: 'OVERDUE',
      subtitle: 'Overdue Requests',
      iconClass: 'overdue-icon'
    }
  ];

  // Create a container for all cards
  const $container = $('<div class="cards-container"></div>');

  // Loop through each data label and create a card
  cardsData.forEach(function(card) {
    // Find the data label
    const $dataLabel = $(`span[name="${card.labelName}"]`);
    
    if ($dataLabel.length) {
      // Create the card structure
      const $card = $('<div class="card"></div>');
      const $title = $(`<div class="card-title">${card.title}</div>`);
      const $content = $('<div class="card-content"></div>');
      const $subtitle = $(`<div class="card-subtitle">${card.subtitle}</div>`);
      const $icon = $(`<span class="card-icon ${card.iconClass}"></span>`);

      // Append the data label and icon to the content div
      $content.append($dataLabel, $icon);

      // Append all parts to the card
      $card.append($title, $content, $subtitle);

      // Append the card to the container
      $container.append($card);
    }
  });

  // Replace the existing labels with the new container
  // Assuming the data labels are inside a parent div, replace that div's content
  $('span[name="dl_ActiveCount"]').parent().empty().append($container);
});